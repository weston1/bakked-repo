import media1 from './about-img-2.jpg'
import media2 from './about-img-2.jpg'
import media3 from './about-img-2.jpg'
import media4 from './about-img-2.jpg'
import media5 from './about-img-2.jpg'

export const media = [media1, media2, media3, media4, media5]
export const mediaByIndex = index => media[index % media.length]
