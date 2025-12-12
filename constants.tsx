import { IconType, Shortcut } from './types';

export const INITIAL_SHORTCUTS: Shortcut[] = [
  {
    id: '1',
    title: 'Gmail',
    url: 'https://mail.google.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj7xpNYovuRRFem5L4odlGxKUn8b_fc3cLKPQGRmp5beQbTpX7eTkoYuxe4kTL-nc2qv_RJOn1GByZRGzQcJq4R4FDi8y_48U86tGjO1omcdot2rWSFDVHTitC-26-J_7HWu3KM8Fqwn9S_kKdsz4v71o6LK_TxMFjJlSfqrrd-Vkyq8au6OLlsMZhTccCa3mJvekI5X6KoRraq50CgaCyZGZiJP05ihguVO9stByPFzMlKOQeROWV8usWkNjZ_AGe-DwPgJOC4ks'
  },
  {
    id: '2',
    title: 'My Drive',
    url: 'https://drive.google.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS11METpCvCas8FCjuXcUKEmgEVCd2-3yiG1rIetksQTzMWYTKpjy1vDJISbSpjT4izlIlmNRUtzTodPDitN4HkB3XCVp-ZWLE22h6-heHbrdDMTySpztIYIYnWtgY3Y2d1fQWzJYoD8JKRRxPizZ091-vRDKtvME3tMFHSIsISd3V-9ykXtoznu4dPsiXTjj-4gWGhOD1H75oYTEtVTrg01agRdpP_XwepEC1J3ZC6vd5f5ISnjZscAkNFivxqQRs2U0j9LSMb7s'
  },
  {
    id: '3',
    title: 'Google cal...',
    url: 'https://calendar.google.com',
    type: IconType.TEXT,
    content: '29',
    bgColor: '#ffffff',
    textColor: '#2563eb' // blue-600
  },
  {
    id: '4',
    title: 'Gemini',
    url: 'https://gemini.google.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9hO09VBVQqDmjQZrIfncSlyiYWcSJv2rpP_ZssMtSQB8E6xTH5uFjnbCQgCg1V1lJPLjwHLTcbryVSMprC-Et2wvHU4FctgJPZ4KlaKt6kjXwEmZDG0ByJNMDxo82kWc7tujjk_4s3GTen_1l_EDWfxcFpVr0vpITS4xn2F8NYx_d-GL8wd7z6cth1ZRnh3bbytYieMQrQ3OjdsRpI7zPaRB3q9bLpdGqCUq_Q0oYNJt4E4HfL_2EuDzlWudhrlZ6TTEdTs8iVo4'
  },
  {
    id: '5',
    title: 'CHATGPT',
    url: 'https://chatgpt.com',
    type: IconType.SVG,
    content: 'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3879-.6766zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.453l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l3.1028-1.7999 3.1028 1.7999v3.5916l-3.1028 1.8-3.1028-1.8z'
  },
  {
    id: '6',
    title: 'E kamus',
    url: '#',
    type: IconType.TEXT,
    content: 'eKamus',
    bgColor: '#3b82f6', // blue-500
    textColor: '#ffffff'
  },
  {
    id: '7',
    title: 'Monkeytype',
    url: 'https://monkeytype.com',
    type: IconType.TEXT,
    content: 'mt',
    bgColor: '#e2b714',
    textColor: '#000000'
  },
  {
    id: '8',
    title: 'Pinterest',
    url: 'https://pinterest.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWPVBiA1rykXYZ3wmnBdEZs4U8KuA3ywyT9o7tHtkxW-L_cp0YEaJ3yUDCcbKV0XD3mjERJrWZ87LiDYC6zopoZTJSJEDEjzXBX31rux2DGN5qTwkP-0u4JxrHps0MHNxIBM6WGela78guIUUiSF6aWJfsZDfE744VkO2PyGZIDdQRVP1asYrzN_mVu7DGQdFf3peWONbPTBj4tobRVkA33WCTFpFUUgDooN3MHDeWilcvMyY7bF9lpLPpCinKaIf59T9JXMxKUUs'
  },
  {
    id: '9',
    title: 'Instagram',
    url: 'https://instagram.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATvx3GYhkRtSyozUbnG3RHPPRn-ljbNk2MWrl7iD4Gb7V4K2Gk7Gr-5OxM6yvzfLsN86ijtxZJ5HVhgRNos8D3UaOqaE2kx_y5ymstjYK0ZhOxOVrqvK2GAZuV0LbpYVTFUrClcyHRY3d4STuvnfTtZzwMjSMpHK7FfXib1OT6XVS8dCXZUBOwKEJIqlsBpsffL_jE79MBsWgc4pWGzQDOnb8rwo9OuCgLb_c4oSAqxdqzhfzPaGzUmkEADVTV4iJQVaqDZB13DQc'
  },
  {
    id: '10',
    title: 'Facebook',
    url: 'https://facebook.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGn_3HoyT4U0b99jAn_FcZKmrLsHyN9efy_y3OtalCzWxmbsv5gyJJrhu957qdTNj8AdsOwqR-3A9CKwhDOSnt6otw9MPgMj-MJJ8BdrUd-AmsGG4Jwk6JanLs63uSPEvbl4SEi4D_ShhgBPU4RBDC-FR2s_hykoY_JUF0DAZzc-hFl71iyhRGTAonVkA8dgbKhUVTixkDXuADwU88HDbWEc_g-lasVeXYpO6fRmGw-TrQNH1Vlt5GEo9RKeGwnVjcCwBy_HJWnqA'
  },
  {
    id: '11',
    title: 'bili',
    url: 'https://bilibili.com',
    type: IconType.ICON,
    content: 'tv',
    bgColor: '#00a1d6',
    textColor: '#ffffff'
  },
  {
    id: '12',
    title: 'Shopee',
    url: 'https://shopee.com',
    type: IconType.ICON,
    content: 'shopping_bag',
    bgColor: '#ee4d2d',
    textColor: '#ffffff'
  },
  {
    id: '13',
    title: 'Github',
    url: 'https://github.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMpbsQWruLTSdEkn7KlPzxRTIYKzOPmjRD2SIOHwki2oCRa_6ucRnnCF5ikbIOC_4O1wbHdbsnb-gb1kWGi_yKZJndzd1xSLHncU5B8KhbNSRfZAF9Wn1Z_dOlq6T7uDq4Ub-B7hl8WdYkCvVzgtOKonjhB_Q8iLdDh_U71OLatt2bsOo-lbFVUAMYgItypFXMFTe1MT6pnuO47ER8gV0NWfPC88XaI2qfbVByAYTDuN9NDHfeaI5WEW9tqizXELisot2YaKm0f5Y'
  },
  {
    id: '14',
    title: 'Leonardo ai',
    url: 'https://leonardo.ai',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDugGxzrAtDWYzO1JgeXYQqwf-bSz-CPvr6jJbhIlibO8yztOrQy4fYYtFHIuugv966dwfT_S8gv7F2ujlsx242D-ZB6AfigjDmCjA13YCIIp5QgAnswkbapiNEArn0iWFc6gLlW2N4AfgdUh8fhA7rD7dASHzpTIrm0ddzeU1h9iNuJFmFct2aPAxyCIVW82l-PoKTKJ9cabgGwtsxZIYOFHdd2BUSqaAPa7k2joGZQ-yZaKVg0xh7FfHdbJ9MPrb3eMd3bVmuI1o'
  },
  {
    id: '15',
    title: 'Free Games',
    url: 'https://www.indiegamebundles.com/category/free/',
    type: IconType.ICON,
    content: 'save',
    bgColor: '#1f2937', // gray-800
    textColor: '#ef4444' // red-500
  },
  {
    id: '16',
    title: 'Steam',
    url: 'https://store.steampowered.com',
    type: IconType.IMAGE,
    content: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC08fLlJfg236oYbZX7NbbDB6-rS7rEgARZ-5e_Oua9puz3ptodLxaVgSZ1Uj706-4EsbCAA_wYsNvPrtSbcdMMTFicQyRQ_TKOmDOzT8eO87oAALqsKl12DSETCEzSDq6CpgRQLHkmZ6y1-lOpJU-x_iQZ-tJAL6IggQbbK2VfOOPI5U52Dd6QPJf8n21dhtfln3kugZZhzvYXHRveR36MMWdJpNaPN8-up6j2ckLQ9kIeWkwUo1lcTy5UBV-BtdeqoAtzXzK0Izg'
  },
  {
    id: '17',
    title: 'freepik ai...',
    url: 'https://freepik.com',
    type: IconType.TEXT,
    content: 'F',
    bgColor: '#2563eb', // blue-600
    textColor: '#ffffff'
  },
  {
    id: '18',
    title: 'Camscanner',
    url: 'https://camscanner.com',
    type: IconType.TEXT,
    content: 'CS',
    bgColor: '#115e59', // teal-800
    textColor: '#ffffff'
  },
];
