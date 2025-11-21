"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, ExternalLink, Copy, Check, Shield, Zap } from "lucide-react"

interface WalletData {
  address: string
  balance: string
  network: string
  connected: boolean
}

export default function Web3WalletSection() {
  const [wallet, setWallet] = useState<WalletData>({
    address: '',
    balance: '0.0000',
    network: 'Ethereum',
    connected: false
  })
  const [copied, setCopied] = useState(false)

  const wallets = [
    { name: 'MetaMask', icon: '🦊', color: 'orange' },
    { name: 'Phantom', icon: '👻', color: 'purple' },
    { name: 'WalletConnect', icon: '🔗', color: 'blue' },
    { name: 'Coinbase', icon: '🔵', color: 'blue' }
  ]

  const handleConnect = (walletName: string) => {
    // Simulate wallet connection
    setTimeout(() => {
      const mockAddress = `0x${Math.random().toString(16).substr(2, 40)}`
      setWallet({
        address: mockAddress,
        balance: (Math.random() * 10).toFixed(4),
        network: 'Ethereum Mainnet',
        connected: true
      })
    }, 1500)
  }

  const handleDisconnect = () => {
    setWallet({
      address: '',
      balance: '0.0000',
      network: 'Ethereum',
      connected: false
    })
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(wallet.address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tokens = [
    { symbol: 'ETH', balance: '2.4567', value: '$4,913.40', change: '+5.2%' },
    { symbol: 'BTC', balance: '0.1234', value: '$5,234.56', change: '+2.1%' },
    { symbol: 'SOL', balance: '45.678', value: '$2,283.90', change: '+8.7%' },
    { symbol: 'MATIC', balance: '1,234', value: '$1,108.32', change: '-1.3%' }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 relative overflow-hidden">
      {/* Animated network background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-cyan-500/30 bg-cyan-500/5 text-cyan-500 font-mono">
            🔗 WEB3 WALLET
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="font-mono text-cyan-400">#</span> Connect Your Wallet
          </h2>
          <p className="text-cyan-200 max-w-2xl mx-auto">
            Experience true Web3 interactivity. Connect your wallet to explore decentralized features and view on-chain assets.
          </p>
        </motion.div>

        {!wallet.connected ? (
          /* Wallet Selection */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-cyan-500/30 bg-cyan-950/50 backdrop-blur max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-300">
                  <Wallet className="h-5 w-5" />
                  Choose Your Wallet
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {wallets.map((walletOption, index) => (
                    <motion.div
                      key={walletOption.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleConnect(walletOption.name)}
                      className="cursor-pointer"
                    >
                      <div className="p-6 rounded-lg border border-cyan-700/30 bg-cyan-900/30 hover:border-cyan-500/50 hover:bg-cyan-800/30 transition-all duration-300">
                        <div className="text-4xl mb-3 text-center">{walletOption.icon}</div>
                        <div className="text-cyan-200 font-medium text-center">{walletOption.name}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 rounded-lg bg-cyan-900/20 border border-cyan-700/30">
                  <div className="flex items-center gap-2 text-cyan-300 text-sm">
                    <Shield className="h-4 w-4" />
                    <span>Your wallet connection is secure and local. No data is sent to any server.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          /* Wallet Connected View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Wallet Info */}
            <Card className="border-cyan-500/30 bg-cyan-950/50 backdrop-blur max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-cyan-300">
                  <div className="flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    Wallet Connected
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleDisconnect}
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                  >
                    Disconnect
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-cyan-900/30 border border-cyan-700/30">
                    <div>
                      <div className="text-cyan-400 text-sm mb-1">Wallet Address</div>
                      <div className="font-mono text-cyan-200">
                        {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyAddress}
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-cyan-900/30 border border-cyan-700/30">
                      <div className="text-cyan-400 text-sm mb-1">Network</div>
                      <div className="text-cyan-200 font-medium">{wallet.network}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-cyan-900/30 border border-cyan-700/30">
                      <div className="text-cyan-400 text-sm mb-1">Total Balance</div>
                      <div className="text-green-400 font-medium">${(parseFloat(wallet.balance) * 2000).toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Token Portfolio */}
            <Card className="border-cyan-500/30 bg-cyan-950/50 backdrop-blur max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-300">
                  <Zap className="h-5 w-5" />
                  Token Portfolio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tokens.map((token, index) => (
                    <motion.div
                      key={token.symbol}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-lg bg-cyan-900/30 border border-cyan-700/30 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center font-bold text-white">
                          {token.symbol.charAt(0)}
                        </div>
                        <div>
                          <div className="text-cyan-200 font-medium">{token.symbol}</div>
                          <div className="text-cyan-400 text-sm">{token.balance}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-200 font-medium">{token.value}</div>
                        <div className={`text-sm ${token.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {token.change}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  )
}