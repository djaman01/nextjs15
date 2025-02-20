//Quand on crée un fichier layout.jsx, il faut obligatoirement extraire le children et le return, sinon il sera considéré comme la page principal et le routing ne fonctionnera pas
const layout = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl text-center">ROOT NAVBAR IN LAYOUT.JSX</h1>
      {children}
    </>
  );
};

export default layout;
