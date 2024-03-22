import {Event} from "../src/types"

import {Blog} from "../src/types"

export const blogsData: Blog[] = [
    {
      id: 0,
      title: 'Art',
      text: ` Art refers to the practice or production of books, writing, painting, drawings, photographs, and other kinds of visual media. It's a human expression that speaks to emotions, culture, and societal issues. Art is subjective, and different forms of art can convey various meanings. Throughout history, it has played a significant role in the development of societies and has influenced various fields, including literature, music, and fashion.  `,
      reviews: ['awesome', 'cool', 'awesome']
    },
    {
      id: 1,
      title: 'Design',
      text: ` Design refers to the process of creating a plan or a blueprint for something to be constructed, produced, or implemented. It involves conceptualization, research, ideation, and consultation. Good design takes into consideration functionality, aesthetics, user experience, and sustainability. It can be applied to various fields such as architecture, graphics, fashion, product development, and more. Effective design can enhance the usability, attractiveness, and success of a project or product.  `,
      reviews: ['awesome', 'cool', 'boring']
    },
    {
      id: 2,
      title: 'Museums',
      text: ` Museums are institutions that house and preserve art, historical objects and other items of cultural importance for public viewing and study. They come in various shapes and sizes, ranging from small, local community museums to large, national or international museums. Some famous museums include the Louvre in Paris, the Smithsonian National Museum of American History in Washington D.C., and the British Museum in London. Museums provide education, exhibitions, and research opportunities for visitors and scholars alike. They also play an important role in the preservation and conservation of cultural heritage.  `,
      reviews: ['awesome', 'cool', 'boring']
    }
  ]

export const eventsData: Event[] = [
    {
      id: 0,
      title: 'My Birthday',
      photos: ['/birthday.jpg', '/birthday2.jpg']
    },
    { 
      id: 1,
      title: 'New Year',
      photos: ['/ny.jpg', '/ny2.jpg']
    },
    {
      id: 2,
      title: 'Novruz',
      photos: ['/novruz.jpg','/nowruz2.jpg',]
    }
  ]