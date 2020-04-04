export default {
  state: {
    listProductsInCart: [
      {
        id: 'prod1',
        titleProduct: 'Шар',
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/experiments-with-firebase.appspot.com/o/images-products%2F1.jpg?alt=media&token=85ee0f7e-3e53-46cd-86e2-f67cb7296677',
        quantity: 5,
        productParams: [
          {
            id: 'param1-prod1',
            name: 'Диаметр',
            sym: 'D',
            unit: 'мм',
            value: 300
          }
        ],
        productSelectParams: [
          {
            type: 'Type1',
            name: 'Вес',
            sym: 'w',
            unit: 'кг',
            value: '1'
          },
          {
            type: 'Type2',
            name: 'Материал',
            value: 'Оц. сталь'
          },
          {
            type: 'Type3',
            name: 'Цвет',
            value: 'Белый'
          }
        ]
      },
      {
        id: 'prod2',
        titleProduct: 'Цилиндр',
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/experiments-with-firebase.appspot.com/o/images-products%2F2.jpg?alt=media&token=64362403-53a5-4995-a3a5-5806055c2a9a',
        quantity: 9,
        productParams: [
          {
            id: 'param1-prod2',
            name: 'Диаметр',
            sym: 'D',
            unit: 'мм',
            value: 600
          },
          {
            id: 'param2-prod2',
            name: 'Высота',
            sym: 'h',
            unit: 'мм',
            value: 1000
          }
        ],
        productSelectParams: []
      },
      {
        id: 'prod3',
        titleProduct: 'Прямоугольный параллелепипед',
        urlImage: 'https://firebasestorage.googleapis.com/v0/b/experiments-with-firebase.appspot.com/o/images-products%2F3.jpg?alt=media&token=4c64caca-2a8e-4da9-b660-3d05cac6562c',
        quantity: 3,
        productParams: [
          {
            id: 'param1-prod3',
            name: 'Сторона',
            sym: 'a',
            unit: 'мм',
            value: 500
          },
          {
            id: 'param2-prod3',
            name: 'Сторона',
            sym: 'b',
            unit: 'мм',
            value: 800
          },
          {
            id: 'param3-prod3',
            name: 'Сторона',
            sym: 'c',
            unit: 'мм',
            value: 1050
          }
        ],
        productSelectParams: [
          {
            type: 'Type1',
            name: 'Вес',
            sym: 'w',
            unit: 'кг',
            value: '0.5'
          },
          {
            type: 'Type2',
            name: 'Материал',
            value: 'Пластик'
          },
          {
            type: 'Type4',
            name: 'Цвет',
            value: 'Берюзовый'
          }
        ]
      }
    ]
  },
  getters: {
    getListProductsInCart: (state) => {
      return state.listProductsInCart
    }
  }
}
