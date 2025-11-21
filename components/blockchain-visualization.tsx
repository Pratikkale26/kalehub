"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Blocks, Receipt, Zap, Network, Shield } from "lucide-react"

interface BlockData {
  id: number
  hash: string
  transactions: number
  timestamp: number
  reward: string
}

interface TransactionData {
  id: string
  from: string
  to: string
  amount: string
  status: 'pending' | 'confirmed'
}

export default function BlockchainVisualization() {
  const [blocks, setBlocks] = useState<BlockData[]>([])
  const [transactions, setTransactions] = useState<TransactionData[]>([])
  const [isAnimating, setIsAnimating] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    // Generate initial blocks
    const initialBlocks: BlockData[] = Array.from({ length: 5 }, (_, i) => ({
      id: 1000 - i,
      hash: `0x${Math.random().toString(16).substr(2, 16)}...`,
      transactions: Math.floor(Math.random() * 500) + 100,
      timestamp: Date.now() - (i * 60000),
      reward: "6.25 BTC"
    }))
    setBlocks(initialBlocks)

    // Generate transactions
    const initialTxs: TransactionData[] = Array.from({ length: 8 }, (_, i) => ({
      id: `0x${Math.random().toString(16).substr(2, 8)}`,
      from: `0x${Math.random().toString(16).substr(2, 6)}...`,
      to: `0x${Math.random().toString(16).substr(2, 6)}...`,
      amount: `${(Math.random() * 10).toFixed(4)} BTC`,
      status: Math.random() > 0.3 ? 'confirmed' : 'pending'
    }))
    setTransactions(initialTxs)

    // Simulate new blocks being mined
    const blockInterval = setInterval(() => {
      if (isAnimating) {
        setBlocks(prev => {
          const newBlock: BlockData = {
            id: prev[0]?.id + 1 || 1001,
            hash: `0x${Math.random().toString(16).substr(2, 16)}...`,
            transactions: Math.floor(Math.random() * 500) + 100,
            timestamp: Date.now(),
            reward: "6.25 BTC"
          }
          return [newBlock, ...prev.slice(0, 4)]
        })
      }
    }, 5000)

    // Simulate new transactions
    const txInterval = setInterval(() => {
      if (isAnimating) {
        setTransactions(prev => {
          const newTx: TransactionData = {
            id: `0x${Math.random().toString(16).substr(2, 8)}`,
            from: `0x${Math.random().toString(16).substr(2, 6)}...`,
            to: `0x${Math.random().toString(16).substr(2, 6)}...`,
            amount: `${(Math.random() * 10).toFixed(4)} BTC`,
            status: 'pending'
          }
          return [newTx, ...prev.slice(0, 6)]
        })
      }
    }, 2000)

    return () => {
      clearInterval(blockInterval)
      clearInterval(txInterval)
    }
  }, [isAnimating, isMounted])

  if (!isMounted) {
    return (
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="container max-w-6xl relative z-10">
          <div className="text-center">
            <div className="animate-pulse text-purple-400">Loading blockchain visualization...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: [0, 100],
              y: [0, 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-purple-500/30 bg-purple-500/5 text-purple-500 font-mono">
            🔗 BLOCKCHAIN VISUALIZATION
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="font-mono text-purple-400">#</span> Live Blockchain Activity
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Watch blocks being mined and transactions flowing through the network in real-time. This is the heartbeat of decentralized finance.
          </p>
        </motion.div>

        {/* Blockchain Chain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="border-purple-500/30 bg-purple-950/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-300">
                <Blocks className="h-5 w-5" />
                Blockchain Chain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {blocks.map((block, index) => (
                  <motion.div
                    key={block.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0"
                  >
                    <div className="relative">
                      <motion.div
                        className="w-32 h-40 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg p-3 border-2 border-purple-400 hover:border-purple-300 transition-all duration-300 cursor-pointer hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-white font-mono text-xs mb-2">
                          Block #{block.id}
                        </div>
                        <div className="text-purple-200 text-xs mb-2 break-all">
                          {block.hash}
                        </div>
                        <div className="text-yellow-300 text-xs mb-1">
                          ⛏️ {block.reward}
                        </div>
                        <div className="text-green-300 text-xs">
                          📦 {block.transactions} txs
                        </div>
                      </motion.div>
                      {index < blocks.length - 1 && (
                        <motion.div
                          className="absolute top-1/2 -right-4 w-4 h-0.5 bg-purple-400"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Transaction Pool */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-purple-500/30 bg-purple-950/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-300">
                <Receipt className="h-5 w-5" />
                Transaction Pool
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {transactions.map((tx, index) => (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-purple-900/30 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        tx.status === 'confirmed' ? 'bg-green-400' : 'bg-yellow-400 animate-pulse'
                      }`} />
                      <div className="font-mono text-sm text-purple-200">
                        {tx.id}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-purple-300">
                        {tx.from} → {tx.to}
                      </div>
                      <div className="font-mono text-sm text-green-400">
                        {tx.amount}
                      </div>
                      <Badge 
                        variant={tx.status === 'confirmed' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {tx.status}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <Button
            variant="outline"
            onClick={() => setIsAnimating(!isAnimating)}
            className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
          >
            {isAnimating ? '⏸️ Pause' : '▶️ Resume'} Animation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}