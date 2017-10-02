import glamorous from 'glamorous';

const BoltWrapper = glamorous.div({
  position: 'absolute',
  bottom: '195px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '200px',
});

const BoltHeadWrapper = glamorous.div(props => ({
  width: '16px',
  margin: props.right ? '0 16px 0 0' : '0 0 0 16px',
}));

const BoltShaftWrapper = glamorous.div(props => ({
  position: 'absolute',
  top: '6px',
  right: props.right && '32px',
  left: props.left && '32px',
  width: '18px',
}));

const BoltMiddle = glamorous.div(props => ({
  position: 'relative',
  height: props.head ? '18px' : '6px',
  background: '#d0dcbc',
  borderRadius: props.head ? '4px' : '0',
  boxShadow: props.head
    ? '0 5px #b2be9e, 0 -5px #e4f0d0'
    : '0 4px #b2be9e, 0 -4px #e4f0d0',
}));

export { BoltWrapper, BoltHeadWrapper, BoltShaftWrapper, BoltMiddle };
