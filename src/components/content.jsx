import React from 'react'
export default function Content(){
  const [meme, setMeme] = React.useState({
    toptext: " ",
    bottomtext: " ",
    randomImg: "https:\/\/i.imgflip.com\/30b1gx.jpg",
  })
  const [memeImage,setAllMemeImg] = React.useState([])
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json()).then(data => setAllMemeImg(data.data.memes))
  },[])
 
  function handelEvent(e
  ){
    e.preventDefault();
    const ranDom = Math.floor(Math.random()* memeImage.length);
    const imgUrl =memeImage[ranDom].url;
    setMeme(prev=>({
      ...prev,
      randomImg:imgUrl
    }));
  }
  function handelChange(e){
    const {name, value} = e.target;
    setMeme(prev=>({
      ...prev, 
      [name]: value
    }))
  }
  return  (
    <>
    <section>
    <div className='memeContent'>
      <form className='form'>
        <input type="text" className='form-input' placeholder='Top text' name="toptext" value={meme.topText} onChange={handelChange}/>

        <input type="text" className='form-input' placeholder='Button text' value={meme.bottomText} name="bottomtext" onChange={handelChange}/>
        <button onClick={handelEvent} className='formButton' >Get a new image</button>
      </form>
      <div className='memeSec'> 
      <img src={meme.randomImg} alt="" className="MEMEIMG" />
      <h2 className='topImg'>{meme.toptext} </h2>
      <h2 className='bottomImg'>{meme.bottomtext}</h2>
      </div>
    </div>
    </section>
    </>
   )
}