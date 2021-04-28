import "./ForSale.css";

function ForSale(): JSX.Element {
  const items = [
    { id: 1, model: "נייקי" },
    { id: 2, model: "אדידס" },
    { id: 3, model: "פומה" },
    { id: 4, model: "ניו-בלאנס" },
    { id: 5, model: "ריבוק" },
  ];

  return (
    <div className="ForSale">
      מכירת נעליים מהחברות הבאות: &nbsp;
      {items.map((item) => (
        <span key={item.id}> # {item.model}</span> 
        
      ))}
    </div>
  );
}

export default ForSale;
