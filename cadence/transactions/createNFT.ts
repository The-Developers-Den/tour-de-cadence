export const createNFT = `

import TourDeCadence from 0x1c97bc77c5d57dfe

transaction (url: String){

  prepare(acct: AuthAccount) {
  
    acct.save(<-TourDeCadence.createNFT(url: url), to: /storage/TourDeCadencePath})
    acct.link<&TourDeCadence.NFT{TourDeCadence.NFTPublic}>(/public/TourDeCadencePath, target: /storage/TourDeCadencePath)
  
  }

  execute {
    log("NFT Created!")
  }
}

`;
