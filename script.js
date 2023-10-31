  const container = document.getElementById('count');
  let count = localStorage.getItem('view_count') || 0;

  if(count){
    count++
    localStorage.setItem('view_count',count)
  }
  else{
    let digits = '123456789';
    let gen;
        for (let i = 0; i < 3; i++) {
            gen += digits[Math.floor(Math.random() * 10)]
        }
    localStorage.setItem('view_count',gen)
  }
container.innerHTML += count
  
