"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Hash, Cpu, Zap, TrendingUp, Activity } from "lucide-react"

export default function MiningStatsSection() {
  const [hashRate, setHashRate] = useState(0)
  const [blocksMined, setBlocksMined] = useState(0)
  const [uptime, setUptime] = useState(0)
  const [activeRigs, setActiveRigs] = useState(0)

  useEffect(() => {
    // Simulate real-time mining stats
    const interval = setInterval(() => {
      setHashRate(prev => prev + (Math.random() - 0.3) * 10)
      setBlocksMined(prev => prev + Math.random() > 0.95 ? 1 : 0)
      setUptime(prev => prev + 1)
      setActiveRigs(Math.floor(Math.random() * 6) + 2)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      title: "Hash Rate",
      value: `${hashRate.toFixed(2)} MH/s`,
      icon: Hash,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      trend: "+12.5%"
    },
    {
      title: "Blocks Mined", 
      value: blocksMined.toString(),
      icon: Activity,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      trend: "+2 today"
    },
    {
      title: "Mining Rigs",
      value: activeRigs.toString(),
      icon: Cpu,
      color: "text-blue-500", 
      bgColor: "bg-blue-500/10",
      trend: "4 active"
    },
    {
      title: "Uptime",
      value: `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m`,
      icon: Zap,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10", 
      trend: "99.9%"
    }
  ]

  const networks = [
    { name: "Bitcoin", algorithm: "SHA-256", status: "active", hashrate: "125.5 MH/s" },
    { name: "Ethereum", algorithm: "Ethash", status: "active", hashrate: "89.2 MH/s" },
    { name: "Monero", algorithm: "RandomX", status: "idle", hashrate: "0 MH/s" },
    { name: "Solana", algorithm: "Proof of Stake", status: "delegating", hashrate: "N/A" }
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-orange-500/30 bg-orange-500/5 text-orange-500 font-mono">
            ⛏️ MINING OPERATIONS
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            <span className="font-mono text-orange-500">#</span> Proof of Work Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of my mining operations and blockchain infrastructure. From hash rates to block rewards, witness the power of decentralized consensus.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-border/50 bg-card/70 backdrop-blur hover:border-orange-500/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    {stat.trend}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Network Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="border-border/50 bg-card/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-500" />
                Network Mining Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {networks.map((network, index) => (
                  <motion.div
                    key={network.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <div>
                        <div className="font-semibold">{network.name}</div>
                        <div className="text-sm text-muted-foreground">{network.algorithm}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-mono text-sm">{network.hashrate}</div>
                        <Badge 
                          variant={network.status === 'active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {network.status}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 group">
            View Mining Dashboard
            <Zap className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}