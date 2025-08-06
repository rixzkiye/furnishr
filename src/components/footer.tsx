const Footer = () => {
    return (
      <footer className="border-t">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Furnishr Static. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  