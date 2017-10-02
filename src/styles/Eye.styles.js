import glamorous from 'glamorous';

const EyeWrapper = glamorous.div({
  position: 'absolute',
  top: '60px',
  left: '0',
  right: '0',
});

const EyeBrows = glamorous.div({
  height: '12px',
  width: '160px',
  margin: '0 auto',
  background: 'linear-gradient(to right, #2c2b2d 50%, #363537 50%)',
  borderRadius: '4px',
});

const Eye = glamorous.div(props => ({
  position: 'absolute',
  right: props.right && '35px',
  left: props.left && '35px',
  zIndex: 2,
  height: '22px',
  width: '43px',
  background: '#d0dcbc',
  borderRadius: '0 0 50px 50px',
  boxShadow: '0 3px 0 3px #4c474b, 0 6px 0 6px #383337',
}));

export { EyeWrapper, EyeBrows, Eye };
