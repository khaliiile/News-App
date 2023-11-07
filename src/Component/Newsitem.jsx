import image from '../assets/news.png'
const Newsitem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py2" style={{maxWidth:'410px'}}>
      
      <img src={src?src:image} style={{height:'200px' , width:'360px'}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
        {description?description.slice(0,90):'news '}
        </p>
        <a href={url} className="btn btn-primary">
          Read more
        </a>
      </div>
    </div>
  );
}

export default Newsitem
