import React from 'react';
import image1 from '../media/(1).jpg'
import image2 from '../media/(2).jpg'
import image3 from '../media/(3).jpg'
import image4 from '../media/(4).jpg'

function Home() {
  return (
    // <div id="carouselExample" className="carousel slide" style={{ height: 75 + "vh", overflowY: "hidden" }}>
    //   <div className="carousel-inner" style={{ display: 'none' }}>
    //     <div className="carousel-item active">
    //       <img src={image1} className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={image2} className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={image3} className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={image4} className="d-block w-100" alt="..." />
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="prev"
    //     style={{ display: 'none' }}
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true" />
    //     <span className="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="next"
    //     style={{ display: 'none' }}
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true" />
    //     <span className="visually-hidden">Next</span>
    //   </button>

    //   <div>
    //     <h1>Wheat Yield Estimation Portal</h1>
    //   </div>
    // </div>
    <div className='bg-light p-3'>
      <h1 className='text-center mb-3'>Wheat Yield Estimation Portal</h1>
      <div className='d-flex align-items-center justify-content-center container mx-auto w-100'>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Yield Crop Estimation</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut sodales mauris, eget euismod velit. Nam fringilla quam quam, nec semper augue venenatis rhoncus. Proin non ligula mauris. Aliquam sollicitudin interdum ipsum, sed dapibus turpis vestibulum vitae. Suspendisse non dolor ut lorem pellentesque rutrum eu sit amet nisl. Sed sollicitudin quam odio, sit amet ornare velit ornare vel. Phasellus tempor nibh elit, id tincidunt dolor dapibus at. Pellentesque varius interdum orci, quis mollis felis lobortis nec.</p>
                <a href="/Predictor" className="btn btn-primary">Go To Predictor</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Disease Classification (Coming Soon)</h5>
                <p className="card-text">Maecenas sodales commodo lobortis. Nullam dignissim magna varius, dictum odio ut, suscipit quam. Curabitur porta efficitur diam, eget condimentum nisi tincidunt nec. Donec pretium egestas justo ac laoreet. Phasellus vitae mattis lacus. Maecenas sed ante mi. Vivamus eget dolor ac dolor lobortis consectetur at vitae diam. Nam nisi purus, fermentum et leo a, posuere finibus ante. Curabitur justo mi, pretium eu enim a, ultrices faucibus eros. Donec euismod lobortis urna vitae vestibulum. Nunc varius pharetra tortor, ut auctor eros pellentesque ultricies.</p>
                <a href="#" className="btn btn-primary disabled">Go To Classifier</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;