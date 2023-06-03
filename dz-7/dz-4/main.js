 // const button = document.querySelector('.btn')
 // button.addEventListener('click', (event) => {
 //     const request = new XMLHttpRequest()
 //     request.open('GET', 'data.json')
 //     request.setRequestHeader("Content-type", "application/data.json")
 //     request.send()
 //     request.addEventListener('load', () => {
 //         const data = JSON.parse(request.response)
 //         data.forEach(cars => {
 //             const models = document.createElement('div')
 //             models.innerHTML = 'model:' + cars.model
 //             const years = document.createElement('div')
 //             years.innerHTML = 'year:' + cars.year
 //             const volumes = document.createElement('div')
 //             volumes.innerHTML = 'volume:' + cars.volume
 //             const div = document.createElement('div')
 //             div.classList.add('div')
 //             document.querySelector('body').append(models, years, volumes)
 //         });
 //         data.map(el => {
 //             console.log("model:" + el.model,'year:' + el.year, 'volume:' + el.volume);
 //         })
 //     })
 // })


 ////////////////////////
  const button = document.querySelector('.btn')
 button.addEventListener('click', async (event) => {
     try {
         const response = await fetch('data.json');
         const data =await response.json();
         data.forEach(cars => {
             const models = document.createElement('div')
             models.innerHTML = 'model:' + cars.model
             const years = document.createElement('div')
             years.innerHTML = 'year:' + cars.year
             const volumes = document.createElement('div')
             volumes.innerHTML = 'volume:' + cars.volume
             const div = document.createElement('div')
             div.classList.add('div')
             document.querySelector('body').append(models, years, volumes)
         });
         data.map(el => {
             console.log("model:" + el.model,'year:' + el.year, 'volume:' + el.volume);
         });
     }catch (error) {
         console.log(error);
     }
 });

