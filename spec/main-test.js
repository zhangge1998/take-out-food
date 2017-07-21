/**
 * Created by ubuntu on 17-7-21.
 */
describe('unit test', ()=> {
  describe('buildItemTotal', ()=> {
    let inputs = ["ITEM0001 x 1",
      "ITEM0013 x 2",
      "ITEM0022 x 1"];
    it('should return right itemTotal', ()=> {
      const itemTotal = [{
        item: {
          id: 'ITEM0001',
          name: '黄焖鸡',
          price: 18.00
        },
        count: 1,
        subTotal: 18.00
      },
        {
          item:{
            id: 'ITEM0013',
            name: '肉夹馍',
            price: 6.00
          },
          count:2,
          subTotal:12.00
        },
        {
          item:{
            id: 'ITEM0022',
            name: '凉皮',
            price: 8.00
          },
          count:1,
          subTotal:8.00
        }];
      expect(buildItemTotal(inputs)).toEqual(itemTotal);
    })
  })
  describe('buildNowTotal',()=>{
    let itemTotal=[{
      item: {
        id: 'ITEM0001',
        name: '黄焖鸡',
        price: 18.00
      },
      count: 1,
      subTotal: 18.00
    },
      {
        item:{
          id: 'ITEM0013',
          name: '肉夹馍',
          price: 6.00
        },
        count:2,
        subTotal:12.00
      },
      {
        item:{
          id: 'ITEM0022',
          name: '凉皮',
          price: 8.00
        },
        count:1,
        subTotal:8.00
      }];
    it('should return right nowTotal',()=>{
      const nowTotal={
        list:[{
          item: {
            id: 'ITEM0001',
            name: '黄焖鸡',
            price: 18.00
          },
          count: 1,
          subTotal: 18.00
        },
          {
            item:{
              id: 'ITEM0013',
              name: '肉夹馍',
              price: 6.00
            },
            count:2,
            subTotal:12.00
          },
          {
            item:{
              id: 'ITEM0022',
              name: '凉皮',
              price: 8.00
            },
            count:1,
            subTotal:8.00
          }],
        nowTotal:38.00
      }
      expect(buildNowTotal(itemTotal)).toEqual(nowTotal);
    })
  })
})
