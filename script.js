  const container = document.getElementById('count');
  let count = localStorage.getItem('view_count');

  if(count){
    count++
    localStorage.setItem('view_count',count)
  }
  else{
    count = 0
    localStorage.setItem('view_count',count)
  }
  container.innerHTML += count
