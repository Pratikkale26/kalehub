"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Heart, Share2, Sparkles } from "lucide-react"

interface NFT {
  id: number
  name: string
  collection: string
  price: string
  image: string
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary'
  likes: number
  description: string
}

export default function NFTGallery() {
  const [nfts, setNfts] = useState<NFT[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Mock NFT data
    const mockNfts: NFT[] = [
      {
        id: 1,
        name: "Crypto Miner #420",
        collection: "Proof of Work Punks",
        price: "2.5 ETH",
        image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rarity: "Legendary",
        likes: 234,
        description: "Rare mining rig NFT with hash rate boost"
      },
      {
        id: 2,
        name: "Blockchain Node #1337",
        collection: "Decentralized Infrastructure",
        price: "0.8 ETH",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rarity: "Epic",
        likes: 156,
        description: "Stake your node and earn rewards"
      },
      {
        id: 3,
        name: "Hash Rate Demon",
        collection: "Mining Legends",
        price: "1.2 ETH",
        image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rarity: "Rare",
        likes: 89,
        description: "Demon-level hash rate capabilities"
      },
      {
        id: 4,
        name: "DePIN Pioneer",
        collection: "Infrastructure Heroes",
        price: "0.5 ETH",
        image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rarity: "Common",
        likes: 45,
        description: "Early adopter of decentralized networks"
      }
    ]
    
    setNfts(mockNfts)
  }, [])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Legendary': return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
      case 'Epic': return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
      case 'Rare': return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  if (!mounted) {
    return (
      <section className="py-20 md:py-32 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="container max-w-6xl relative z-10">
          <div className="text-center">
            <div className="animate-pulse text-pink-400">Loading NFT gallery...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-pink-500/30 bg-pink-500/5 text-pink-500 font-mono">
            🎨 NFT GALLERY
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="font-mono text-pink-400">#</span> Digital Collectibles
          </h2>
          <p className="text-pink-200 max-w-2xl mx-auto">
            My curated collection of Proof of Work and Web3-themed NFTs. Each piece represents the intersection of art and blockchain technology.
          </p>
        </motion.div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {nfts.map((nft, index) => (
            <motion.div
              key={nft.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="border-pink-500/30 bg-pink-950/50 backdrop-blur hover:border-pink-400/50 transition-all duration-300 overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className={getRarityColor(nft.rarity)}>
                      {nft.rarity}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-white mb-1 text-sm">{nft.name}</h3>
                  <p className="text-pink-300 text-xs mb-2">{nft.collection}</p>
                  <p className="text-gray-400 text-xs mb-3 line-clamp-2">{nft.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-pink-400 font-bold text-sm">{nft.price}</div>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <Heart className="h-3 w-3" />
                      {nft.likes}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-pink-500 hover:bg-pink-600 text-xs">
                      View NFT
                    </Button>
                    <Button size="sm" variant="outline" className="border-pink-500/30 text-pink-400 hover:bg-pink-500/10">
                      <Share2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-pink-500/30 bg-pink-950/50 backdrop-blur max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-pink-400 mr-2" />
                <h3 className="text-2xl font-bold text-white">Want to see more?</h3>
              </div>
              <p className="text-pink-200 mb-6">
                Explore my complete NFT collection on OpenSea, Rarible, and other marketplaces. 
                Don&apos;t forget to follow for future drops and collaborations.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-pink-500 hover:bg-pink-600 group">
                  View Full Collection
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="border-pink-500/30 text-pink-400 hover:bg-pink-500/10">
                  Follow on Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}