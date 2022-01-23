module.exports = function toReadable (number) {
    let result = '';
    if ( number % 100 > 0) {
        let hundred = Math.floor(number/100) 
      switch (hundred) {        
          case 1:
            result = `${result}${'one hundred '}`
            break;
          case 2:
              result = `${result}${'two hundred '}`
              break;
          case 3:
              result = `${result}${'tree hundred '}`
              break;
          case 4:
              result = `${result}${'four hundred '}`
              break;
          case 5:
              result = `${result}${'five hundred '}`
              break;
          case 6:
              result = `${result}${'six hundred '}`
              break;
          case 7:
              result = `${result}${'seven hundred '}`
              break;
          case 8:
              result = `${result}${'eight hundred '}`
              break;
          case 9:
              result = `${result}${'nine hundred '}`
              break;
          default:
              break;
        }
    }

    if ( number % 10 > 1) {
        let tens = Math.floor(number/10) - Math.floor(number/100) * 10
      switch (tens) {        
          case 2:
            result = `${result}${'twenty '}`
            break;
          case 3:
              result = `${result}${'thirty '}`
              break;
          case 4:
              result = `${result}${'forty '}`
              break;
          case 5:
              result = `${result}${'fifty '}`
              break;
          case 6:
              result = `${result}${'sixty '}`
              break;
          case 7:
              result = `${result}${'seventy '}`
              break;
          case 8:
              result = `${result}${'eighty '}`
              break;
          case 9:
              result = `${result}${'ninety '}`
              break;          
          default:
              break;
        }  
    }
    if  (Math.floor(number/10) - Math.floor(number/100) * 10 !== 1) {
        switch (number % 10) {         
            case 1:
              result = `${result}${'one'}`
              break;
            case 2:
                result = `${result}${'two'}`
                break;
            case 3:
                result = `${result}${'tree'}`
                break;
            case 4:
                result = `${result}${'four'}`
                break;
            case 5:
                result = `${result}${'five'}`
                break;
            case 6:
                result = `${result}${'six'}`
                break;
            case 7:
                result = `${result}${'seven'}`
                break;
            case 8:
                result = `${result}${'eight'}`
                break;
            case 9:
                result = `${result}${'nine'}`
                break;
            default:
                break;
      }
    }

   
    if (number - Math.floor(number/100)*100 ) {
        let num = number - Math.floor(number/100)*100
        switch (num) {         
            case 10:
              result = `${result}${'ten'}`
              break;
            case 11:
                result = `${result}${'eleven'}`
                break;
            case 12:
                result = `${result}${'twelve'}`
                break;
            case 13:
                result = `${result}${'thirteen'}`
                break;
            case 14:
                result = `${result}${'fourteen'}`
                break;
            case 15:
                result = `${result}${'fifteen'}`
                break;
            case 16:
                result = `${result}${'sixteen'}`
                break;
            case 17:
                result = `${result}${'seventeen'}`
                break;
            case 18:
                result = `${result}${'eighteen'}`
                break;
            case 19:
                result = `${result}${'nineteen'}`
                break;
            default:
                break;
      }
      }

      if ( number === 0) return 'zero'
    return result;
}

