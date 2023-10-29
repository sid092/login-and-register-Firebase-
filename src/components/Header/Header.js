import React from 'react'
import './Header.css'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

const Header = () => {
  return (
    <div className='container'>
      <div className='leftSide'>
        LOGO
      </div>
      <div className='searchBar'>
        <TextField
          fullWidth
          placeholder="Search here..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <>
                <InputAdornment position="end">
                  <IconButton>
                    <TuneIcon />
                  </IconButton>
                </InputAdornment>
                <InputAdornment position="end">

                  <IconButton style={{ fontSize: '12px' }}>
                    Filters
                  </IconButton>
                </InputAdornment>
              </>
            ),
          }}

        />
      </div>
      <div className='rightSide'>
        <span>Become a Seller</span>
      </div>
    </div>
  )
}

export default Header
