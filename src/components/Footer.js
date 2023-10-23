const Footer = () => {
  return (
    <footer className='p-8 flex flex-col  items-center gap-3 bg-rose-300 opacity-75'>
      <h2 className='footer-logo font-bold  italic text-2xl'>
      Recipe<span className='text-rose-500'>Finder</span>
      </h2>
      
      <h1>
      <div>
      {/* <b> */}
      <span style={{fontSize: 35}}> @Rajat</span><span className='text-rose-500' style={{fontSize: 35}}>Nagar</span> 
      {/* </b> */}
      </div>
      </h1>

      
      
      <p>&copy; {new Date().getFullYear()} Rajat Nagar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
