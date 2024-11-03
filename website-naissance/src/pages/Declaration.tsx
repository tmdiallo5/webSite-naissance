import { DECLARATIONS } from "../utils";

function Declaration() {
  return (
    <div className="border-4 border-blue-200 bg-white shadow-md rounded-md">
      <article>
        <span>Date</span>

        <span>Enfant</span>

        <span>Date de naissances</span>

        <span>Hopital</span>

        <span>Parent 1</span>
        <span>Parent 2</span>

        <span>Statu</span>
        <span>ACTIONS</span>
      </article>
      {DECLARATIONS.map((item) => (
        <article key={item.id}>
          <span>{item.registered}</span>
          <span>
            <span>{item.child.firstName}</span>
            <span>{item.child.lastName}</span>
          </span>
          <span>{item.child.birthDate}</span>
          <span>
            <span>{item.company.name}</span>
          </span>
          <span>
            <span>{item.firstParent.firstName}</span>
            <span>{item.firstParent.lastName}</span>
          </span>
          <span>
            <span>{item.secondParent.firstName}</span>
            <span>{item.secondParent.lastName}</span>
          </span>

          <span>{item.status}</span>
          <span>ACTIONS</span>
        </article>
      ))}
    </div>
  );
}

export default Declaration;
