  const container = document.getElementById('count');
  let count = localStorage.getItem('view_count');

  if(count){
    count++
    localStorage.setItem('view_count',count)
  }
  else{
    delete count
    let digits = '123456789';
    let count =0
        for (let i = 0; i < 3; i++) {
            count += digits[Math.floor(Math.random() * 10)]
        }
    localStorage.setItem('view_count',count)
  }
  container.innerHTML += count
