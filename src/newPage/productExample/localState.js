import samsung from '../../img/samsung.webp'
import iphone from '../../img/iphone.jpg'
import huawei from '../../img/huawei.jpg'
import gejian from '../../img/GEJIAN.webp'
import lige from '../../img/LIGE.webp'
import mafam from '../../img/MAFAM-MX7.webp'
import jbl from '../../img/TWS-Jbl-T280-.webp'
import px5 from '../../img/TWS-PX5.webp'
import vg10 from '../../img/TWS-VG10-.webp'

export let LocalState = [
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'mobile',
        name:'Samsung Galaxy S21',
        price: 600,
        image:samsung,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'mobile',
        name:'Iphone 12 Pro max ',
        price: 900,
        image:iphone,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'mobile',
        name:'Huawei Nova 9',
        price: 400,
        image:huawei,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'watch',
        name:'Gejian',
        price: 110,
        image:gejian,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'watch',
        name:'Lige ',
        price: 90,
        image:lige,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'watch',
        name:'Mafam MX-7',
        price: 100,
        image:mafam,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'earphones',
        name:'JBL T-280',
        price: 50,
        image:jbl,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'earphones',
        name:'TWS PX-5 ',
        price: 30,
        image:px5,
    }, 
    { 
        id:Math.random().toString(36).substr(2,9),
        category:'earphones',
        name:'TWS VG-10',
        price: 25,
        image:vg10,
    }, 
]