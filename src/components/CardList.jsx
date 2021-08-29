function CardList({pics}) {

  const cols = 4
  const rowsPerCol = Math.ceil(pics.length / cols)
  
  let picsSorted = []

  for(let k = 0; k < cols; k++) {
    let arrY = []

    let item;
    let i = 0;

    do {
      item = pics[k + i]
      if (item) {
        arrY.push(item)
      }
      i = i + cols
    } while(item !== undefined)

    picsSorted.push(arrY)
  }

console.log(picsSorted)

  return(
    <div className="card-list">
      {
        picsSorted.map(column => (
            <div class="column"> 
              {
                column.map(rowItem => (
                    <img src={rowItem.urls.thumb} alt={rowItem.alt_description} />
                ))
              }
            </div>
        ))
      }
    </div>
  )
}

export default CardList;