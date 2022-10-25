import './style.scss'
import { Grid } from '@mui/material'
import { FAQ } from '../../api/FAQ'
import ItemFAQ from './itemFAQ'

function Faq() {
  const data = FAQ
  const lengthData = data.length / 2
  return (
    <div className=''>
      <div className="title_faq">
        <h4>Most Popular Questions</h4>
      </div>
      <div className="content_faq">
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item md={6}>
            <Grid container spacing={{ md: 4 }}>
              {data.map((item, index) => (
                index < lengthData && (
                  <Grid item xs={2} sm={6} md={12}>
                    <ItemFAQ dataItem={item} />
                  </Grid>
                )

              ))}
            </Grid>
          </Grid>

          <Grid item md={6}>
            <Grid container spacing={{ md: 4 }}>
              {data.map((item, index) => (
                index >= lengthData && (
                  <Grid item xs={2} sm={6} md={12}>
                    <ItemFAQ dataItem={item} />
                  </Grid>
                )
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Faq