import glamorous from 'glamorous';

const Face = glamorous.div({
  position: 'relative',
  display: 'flex',
  height: '200px',
  width: '200px',
  background: 'linear-gradient(to right, #99c46e 50%, #add882 50%)',
  borderBottom: '6px solid #7ba650',
  borderTopLeftRadius: '15%',
  borderTopRightRadius: '15%',
  borderBottomRightRadius: '25%',
  borderBottomLeftRadius: '25%',
});

const Mouth = glamorous.div({
  position: 'absolute',
  bottom: '40px',
  left: '0',
  right: '0',
  height: '8px',
  width: '100px',
  margin: '0 auto',
  background: 'linear-gradient(to right, #2c2b2d 50%, #363537 50%)',
  borderRadius: '10px',
});

const Neck = glamorous.div({
  height: '80px',
  width: '100px',
  background: 'linear-gradient(to right, #99c46e 50%, #add882 50%)',
  borderTop: '2px solid #7ba650',
  borderBottom: '6px solid #7ba650',
  borderBottomRightRadius: '40px',
  borderBottomLeftRadius: '40px',
});

export { Face, Mouth, Neck };
