import portfolioData from '../../content/portfolio.json';

// PortfolioCard
const PortfolioList = () => {
  return (
    <section>
      {portfolioData.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
        </div>
      ))}
    </section>
  );
};

export default PortfolioList;
