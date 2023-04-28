import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 2,
  //   stakingToken: tokens.f4h,
  //   earningToken: tokens.f4h,
  //   contractAddress: {
  //     97: '0xCe6DbE579057728D6E0bf79E08168f6039f3a653',
  //     56: '0xCe6DbE579057728D6E0bf79E08168f6039f3a653',
  //   },
  //   depositAddress: {
  //     97: '0x6F1a6c8fE2550143c2f962383429CA2887A65b11',
  //     56: '0x6F1a6c8fE2550143c2f962383429CA2887A65b11',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   isLock: true,
  //   lockTime: 180,
  //   harvest: true,
  //   rate: 8,
  //   tokenPerBlock: '10',
  //   sortOrder: 1,
  //   isFinished: false,
  // },
  // {
  //   sousId: 3,
  //   stakingToken: tokens.f4h,
  //   earningToken: tokens.f4h,
  //   contractAddress: {
  //     97: '0xd1Bbd4B26DD7FC3D1d74A70Ed89Fc3Fd94440C1F',
  //     56: '0xd1Bbd4B26DD7FC3D1d74A70Ed89Fc3Fd94440C1F',
  //   },
  //   depositAddress: {
  //     97: '0x4020Ab1e9923c069de759DD8ecc1F147e47589DA',
  //     56: '0x4020Ab1e9923c069de759DD8ecc1F147e47589DA',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   isLock: true,
  //   lockTime: 365,
  //   harvest: true,
  //   rate: 14,
  //   tokenPerBlock: '10',
  //   sortOrder: 2,
  //   isFinished: false,
  // },
  {
    sousId: 4,
    stakingToken: tokens.dope,
    earningToken: tokens.dope,
    contractAddress: {
      97: '0x8BBc65A07FF1f15790Fd6E54B9911dC1f3D83970',
      56: '0x8BBc65A07FF1f15790Fd6E54B9911dC1f3D83970',
    },
    depositAddress: {
      97: '0xa25b2d664abb432af956bb5087e1100428ceceb8',
      56: '0xa25b2d664abb432af956bb5087e1100428ceceb8',
    },
    poolCategory: PoolCategory.CORE,
    isLock: false,
    lockTime: 365,
    harvest: true,

    rate: 4,
    tokenPerBlock: '10',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.dope,
    earningToken: tokens.dope,
    contractAddress: {
      97: '0x342b83e4ba2e78ae1a08b64c684bbf00b1831f37',
      56: '0x342b83e4ba2e78ae1a08b64c684bbf00b1831f37',
    },
    depositAddress: {
      97: '0x3216b28CE0fc43d8A427CaEA9A301E1714E4BC03',
      56: '0x3216b28CE0fc43d8A427CaEA9A301E1714E4BC03',
    },
    poolCategory: PoolCategory.CORE,
    isLock: false,
    lockTime: 365,
    harvest: true,
    lockInfo: 'Only for DopePuffPass Holders',
    rate: 6,
    tokenPerBlock: '10',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: tokens.dope,
    earningToken: tokens.dope,
    contractAddress: {
      97: '0xB52e77437bA61f4c10C90a2083366AFa68F888bA',
      56: '0xB52e77437bA61f4c10C90a2083366AFa68F888bA',
    },
    depositAddress: {
      97: '0x593C181C95B84f46312021BfffDC71AbF0267456',
      56: '0x593C181C95B84f46312021BfffDC71AbF0267456',
    },
    poolCategory: PoolCategory.CORE,
    isLock: true,
    lockTime: 30,
    harvest: true,
    rate: 8,
    tokenPerBlock: '10',
    sortOrder: 3,
    isFinished: false,
  },
  {
    sousId: 8,
    stakingToken: tokens.dope,
    earningToken: tokens.dope,
    contractAddress: {
      97: '0x0c2c91fc9827787f66a7cd14b8f1e5c36a5d8f70',
      56: '0x0c2c91fc9827787f66a7cd14b8f1e5c36a5d8f70',
    },
    depositAddress: {
      97: '0x96b188C57acdd0e41606B469d1fDAF8410CAc3c3',
      56: '0x96b188C57acdd0e41606B469d1fDAF8410CAc3c3',
    },
    poolCategory: PoolCategory.CORE,
    isLock: true,
    lockTime: 30,
    lockInfo: 'Only for DopePuffPass Holders',
    harvest: true,
    rate: 10,
    tokenPerBlock: '10',
    sortOrder: 3,
    isFinished: false,
  },
  // {
  //   sousId: 7,
  //   stakingToken: tokens.TTN,
  //   earningToken: tokens.TTN,
  //   // contractAddress: {
  //   //   97: '0xfDD1977EE2B1ae19D907FfD13277610870B209Ed',
  //   //   56: '0xfDD1977EE2B1ae19D907FfD13277610870B209Ed',
  //   // },
  //   depositAddress: {
  //     97: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
  //     56: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
  //   },
  //   contractAddress: {
  //     97: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
  //     56: '0xCC2542b84bB6168bC4D54768C9AA33b5728686AE',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   harvest: true,
  //   isLock: false,
  //   lockTime: 365,
  //   rate: 10, // 10%
  //   tokenPerBlock: '10', // not important
  //   sortOrder: 0,
  //   isFinished: false,
  // },
]

export default pools
