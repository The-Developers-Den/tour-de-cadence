export const getNFT = `
import TourDeCadence from 0x1c97bc77c5d57dfe

pub fun main(account: Address): AnyStruct {


  let publicReference = getAccount(account).getCapability(/public/BasicNFTPath)
                                    .borrow<&TourDeCadence.NFT{TourDeCadence.NFTPublic}>()
                                    ?? panic("No NFT reference found here!")

  return [publicReference.getID(), publicReference.getURL()]
}

`;
