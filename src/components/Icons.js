const Icons = (streaming) => {
    switch (streaming) {
      case 'MovistarTV':
        streaming = 'icons/movistar.png'
        break;
      case 'Max':
      case 'Max Amazon Channel':
        streaming = 'icons/max.png'
        break;
      case 'HBO Max':
        streaming = 'icons/hbo.png'
        break;
      case 'fuboTV':
        streaming = 'icons/fubo.png'
        break;
      case 'MGM Plus Amazon Channel':
        streaming = 'icons/mgm.png'
        break;
      case 'Cinemax Apple TV Channel':
        streaming = 'icons/cinemax.png'
        break;
      case 'MGM Plus Roku Premium Channel':
        streaming = 'icons/roku.png'
        break;
      case 'MGM Plus':
        streaming = 'icons/mgm.png'
        break;
      case 'Claro video':
        streaming = 'icons/claro.png'
        break;
      case 'Crunchyroll':
        streaming = 'icons/crunchyroll.png'
        break;
      case 'Starz Apple TV Channel':
        streaming = 'icons/starz.png'
        break;
      case 'Hotstar':
        streaming = 'icons/hotstar.png'
        break;
      case 'Sony Liv':
        streaming = 'icons/liv.png'
        break;
      case 'FXNow':
        streaming = 'icons/fx.png'
        break;
      case 'Hulu':
        streaming = 'icons/hulu.png'
        break;
      case 'Classix':
        streaming = 'icons/classix.png'
        break;
      case 'Star Plus':
        streaming = 'icons/star.png'
        break;
      case 'MUBI':
        streaming = 'icons/mubi.png'
        break;
      case 'Netflix':
      case 'Netflix basic with Ads':
        streaming = 'icons/netflix.png'
        break;
      case 'Amazon Prime Video':
        streaming = 'icons/amazon.png'
        break;
      case 'Paramount Plus':
      case 'Paramount Plus Apple TV Channel ':
        streaming = 'icons/paramount.png'
        break;
      case 'Apple TV Plus':
        streaming = 'icons/apple.png'
        break;
      case 'Disney Plus':
        streaming = 'icons/disney.png'
        break;
      case 'Cultpix':
        streaming = 'icons/cultpix.png'
        break;
      default:
        streaming = 'icons/clear.svg'
        break;
    }
    return streaming;
  }
  
  export default Icons;