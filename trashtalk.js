function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function trashtalk(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code', '寫不出程式'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常', '也是理所當然的']
  let trashtalk = ''
  switch (options.target) {
    case 'engineer':
      trashtalk = '身為一個' + options.target + random(task.engineer) + random(phrase);
      break;
    case 'designer':
      trashtalk = '身為一個' + options.target + random(task.designer) + random(phrase);
      break;
    case 'entrepreneur':
      trashtalk = '身為一個' + options.target + random(task.entrepreneur) + random(phrase);
      break;
    default:
      trashtalk =
        `
      <div class="alert alert-danger" role="alert" style="height:90%; display: flex;align-items: center; justify-content: center;">你要選一個人來說幹話阿!<a href='/' class="alert-link">(返回)<a></div>
      `
  }
  return trashtalk
}

module.exports = trashtalk

