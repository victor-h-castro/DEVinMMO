/* eslint-disable import/no-unresolved */
import { useContext, useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
  Input, Slide, InputAdornment, ClickAwayListener,
} from '@mui/material';
import Iconify from 'component/Iconify';
import ButtonAnimated from 'component/ButtonAnimated';
import { SettingsContext } from 'context/SettingContext';

// ----------------------------------------------------------------------

const SearchbarStyled = styled('div')({
  width: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  height: 97,
  top: 0,
  left: 0,
  zIndex: 9999,
  paddingLeft: 64,
  boxShadow: '0 8px 16px 0 rgb(145 158 171 / 12%)',
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'blur(6px)',
});

// ----------------------------------------------------------------------

export default function Searchbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const { setState, state } = useContext(SettingsContext);
  console.log(state);
  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyled>
            <Input
              fullWidth
              placeholder="Search…"
              disableUnderline
              onChange={(e) => setState(e.target.value)}
              startAdornment={(
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ width: 24, height: 24 }}
                  />
                </InputAdornment>
              )}
              sx={{ mr: 2 }}
            />
          </SearchbarStyled>
        </Slide>
        {!isOpen && (
          <ButtonAnimated onClick={handleOpen}>
            <Iconify icon="eva:search-fill" width={24} height={24} />
          </ButtonAnimated>
        )}
      </div>
    </ClickAwayListener>
  );
}
