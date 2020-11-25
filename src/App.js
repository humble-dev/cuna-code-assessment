import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='container mt-5' style={{ maxWidth: 700 }}>
      <h1 className='h1 mb-5'>Auto loan pre-qualification form</h1>
      <div className='form-group'>
        <label htmlFor='purchase-price'>Purchase Price</label>
        <input
          type='text'
          className='form-control'
          id='purchase-price'
          aria-describedby='purchase-price-help'
        />
        <small id='purchase-price-help' className='form-text text-muted'>
          Purchase price help
        </small>
      </div>

      <div className='form-group'>
        <label htmlFor='auto-make'>Auto Make</label>
        <input
          type='text'
          className='form-control'
          id='auto-make'
          aria-describedby='auto-make-help'
        />
        <small id='auto-make-help' className='form-text text-muted'>
          Auto Make help
        </small>
      </div>

      <div className='form-group'>
        <label htmlFor='auto-model'>Auto Model</label>
        <input
          type='text'
          className='form-control'
          id='auto-model'
          aria-describedby='auto-model-help'
        />
        <small id='auto-model-help' className='form-text text-muted'>
          Auto Model help
        </small>
      </div>

      <div className='form-group'>
        <label htmlFor='estimated-yearly'>Estimated Yearly Income</label>
        <input
          type='number'
          className='form-control'
          id='estimated-yearly'
          aria-describedby='estimated-yearly-help'
        />
        <small id='estimated-yearly-help' className='form-text text-muted'>
          Auto Model help
        </small>
      </div>

      <div className='form-group'>
        <label htmlFor='credit-score'>Credit Score</label>
        <input
          type='number'
          className='form-control'
          id='credit-score'
          aria-describedby='credit-score-help'
        />
        <small id='credit-score-help' className='form-text text-muted'>
          Credit Score help
        </small>
      </div>

      <div className='mt-5'>
        <button className='btn btn-primary'>Submit</button>
      </div>
    </div>
  )
}

export default App
