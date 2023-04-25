
const calcTimeDiff = date => {
    
    const currentTime = new Date().getTime()
    const futureTime = new Date(`${date} 00:00:00`).getTime()
    const diffTime = (futureTime - currentTime) / 1000
    // console.log(new Date(futureTime));
    const diffDays = Math.round(diffTime / 86400)
    return diffDays;
}
console.log(`there are ${calcTimeDiff('2023-12-24')} left until Christmas`);






   const addCalender = (data, id ) => {
    const calenders = document.querySelector('.container')


    const html = `<section class="container" data-id="${id}>
    <div class="card">
         <div class="brush">
              <h2>${data.title}</h2>
              <img src="./Assets/images/img.png" alt="brush-stroke" >
             
              <img  class="minus" src="/Assets/images/image (1).png" alt="delete" data-id="${id}>
              
         </div>
         <div class="card-details">
              <h3>There are ${daysLeft} days Left until ${data.title} </h3>
         </div>
    </div>
    </section>
    `
   calenders.innerHTML += html

   }
   export { addCalender }
   