function Index({ model: { name, checked } }) {
  return (
    <div>
      name: {name} checked: {checked.toString()}
    </div>
  );
}

export default Index;
