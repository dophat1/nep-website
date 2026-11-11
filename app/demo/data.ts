export type Product={id:string;name:string;category:string;stock:number;reorder:number;price:number};
export type Order={id:string;date:string;status:'fulfilled'|'pending';lines:{productId:string;quantity:number}[]};
export const products:Product[]=[
  {id:'GAO-ST25',name:'Gạo ST25 5kg',category:'Gạo',stock:42,reorder:35,price:175000},
  {id:'CAFE-ROB',name:'Cà phê Robusta 500g',category:'Đồ uống',stock:18,reorder:25,price:125000},
  {id:'NUOC-MAM',name:'Nước mắm Phú Quốc 500ml',category:'Gia vị',stock:31,reorder:30,price:89000},
  {id:'TRA-SEN',name:'Trà sen Tây Hồ 100g',category:'Đồ uống',stock:12,reorder:20,price:145000},
  {id:'MI-GAO',name:'Mì gạo lứt 400g',category:'Thực phẩm',stock:70,reorder:30,price:49000},
  {id:'DAU-ME',name:'Dầu mè nguyên chất 250ml',category:'Gia vị',stock:9,reorder:18,price:99000},
];
export const orders:Order[]=[
  {id:'BM-101',date:'2026-11-04',status:'fulfilled',lines:[{productId:'GAO-ST25',quantity:4},{productId:'NUOC-MAM',quantity:3}]},
  {id:'BM-102',date:'2026-11-04',status:'fulfilled',lines:[{productId:'CAFE-ROB',quantity:5},{productId:'MI-GAO',quantity:6}]},
  {id:'BM-103',date:'2026-11-05',status:'fulfilled',lines:[{productId:'TRA-SEN',quantity:3},{productId:'DAU-ME',quantity:5}]},
  {id:'BM-104',date:'2026-11-05',status:'pending',lines:[{productId:'GAO-ST25',quantity:7},{productId:'CAFE-ROB',quantity:2}]},
  {id:'BM-105',date:'2026-11-06',status:'fulfilled',lines:[{productId:'GAO-ST25',quantity:6},{productId:'MI-GAO',quantity:8}]},
  {id:'BM-106',date:'2026-11-07',status:'fulfilled',lines:[{productId:'NUOC-MAM',quantity:9},{productId:'TRA-SEN',quantity:4}]},
  {id:'BM-107',date:'2026-11-07',status:'fulfilled',lines:[{productId:'CAFE-ROB',quantity:7},{productId:'DAU-ME',quantity:4}]},
  {id:'BM-108',date:'2026-11-08',status:'pending',lines:[{productId:'TRA-SEN',quantity:8},{productId:'MI-GAO',quantity:10}]},
  {id:'BM-109',date:'2026-11-09',status:'fulfilled',lines:[{productId:'GAO-ST25',quantity:5},{productId:'CAFE-ROB',quantity:5}]},
  {id:'BM-110',date:'2026-11-10',status:'fulfilled',lines:[{productId:'MI-GAO',quantity:12},{productId:'NUOC-MAM',quantity:6}]},
  {id:'BM-111',date:'2026-11-10',status:'fulfilled',lines:[{productId:'GAO-ST25',quantity:3},{productId:'DAU-ME',quantity:6}]},
];
export const priceOf=(id:string)=>products.find(p=>p.id===id)?.price??0;
export const orderRevenue=(o:Order)=>o.lines.reduce((sum,line)=>sum+line.quantity*priceOf(line.productId),0);
export const revenue=orders.filter(o=>o.status==='fulfilled').reduce((sum,o)=>sum+orderRevenue(o),0);
export const fulfilled=orders.filter(o=>o.status==='fulfilled').length;
export const alerts=products.filter(p=>p.stock<p.reorder);
export const trend=[4,5,6,7,8,9,10].map(day=>({day,amount:orders.filter(o=>o.status==='fulfilled'&&Number(o.date.slice(-2))===day).reduce((sum,o)=>sum+orderRevenue(o),0)}));
export const money=(n:number)=>new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0}).format(n);
