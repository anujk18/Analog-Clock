setInterval(() => {
    let date=new Date();
    let hrs=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let hrotation=30*hrs + min/2;
    let mrotation=6*min;
    let srotation= 6*sec;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);