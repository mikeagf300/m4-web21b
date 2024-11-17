import { Product } from "../interfaces";

// Mock de productos para el desarrollo de la tienda

export const productsMock: Product[] = [
    {
      id: 0,
      name: "Mock iPhone 16",
      price: 699,
      description:
        "Experience power and elegance with the iPhone 16: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
      image:
        "https://www.apple.com/mx/iphone-16/images/overview/product-viewer/iphone/all_colors__flhn5cmb1t26_xlarge.jpg",
      categoryId: 1,
      stock: 10,
    },
    {
        id: 1,
      name: "Mock MacBook Air",
      price: 999,
      description:
        "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
      image:
        "https://www.apple.com/v/macbook-air/s/images/overview/routers/trade_in__6u9w2o7115uu_large.jpg",
      categoryId: 2,
      stock: 10,
    },
    {
        id: 2,
      name: "Mock iPad Pro",
      price: 799,
      description:
        "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
      image:
        "https://www.apple.com/v/ipad-pro/aq/images/overview/contrast/product-tile/ipad_pro__ea93uc0cnvsm_large.jpg",
      categoryId: 3,
      stock: 10,
    },
    {
        id: 3,
      name: "Mock Apple Watch Series 10",
      price: 399,
      description:
        "Stay connected and healthy with the Apple Watch Series 10: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
      image:
        "https://www.apple.com/mx/apple-watch-series-10/images/overview/connectivity/connected_text_and_calling__b7tbcrzmdb36_large.jpg",
      categoryId: 4,
      stock: 10,
    },
    {
        id: 4,
      name: "Mock AirPods Pro",
      price: 249,
      description:
        "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
      image:
        "https://www.apple.com/v/airpods-pro/l/images/overview/battery_magsafe__b8uyauldcub6_large.jpg",
      categoryId: 5,
      stock: 10,
    },
    {
        id: 5,
      name: "Mock HomePod mini",
      price: 99,
      description:
        "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
      image:
        "https://www.apple.com/mx/homepod-mini/images/overview/sound_handoff__c0nz1ab2mmwm_large.jpg",
      categoryId: 6,
      stock: 10,
    },
  ];