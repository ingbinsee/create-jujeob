function Footer({information, className}) {
  return (
    <footer>
      <small className={className}>
        &copy; {information}
      </small>
    </footer>
  );
}

export default Footer;
