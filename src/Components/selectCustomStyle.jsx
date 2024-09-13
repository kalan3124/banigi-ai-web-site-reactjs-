
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: '18px 20px',
    border: 'none',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: '#43484B',
    backgroundImage: 'url("data:image/svg+xml;utf8,<svg width=\'10\' height=\'18\' viewBox=\'0 0 10 18\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M1.5 1.80249L9 9.30249L1.5 16.8025\' stroke=\'white\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'/></svg>")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 20px center',
    cursor: 'pointer',
    color: 'white',
    marginBottom: '20px',
    outline: 'none'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#C79952' : '#43484B',
    color: 'white',
    '&:hover': {
      backgroundColor: '#C79952',
      color: 'white',
    },
    marginTop: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#43484B',
    marginTop: '-10px',
    zIndex: '10'
  }),
};

export default customStyles;
