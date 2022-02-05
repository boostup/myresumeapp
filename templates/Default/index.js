function Index({ model }) {
  return <pre>{JSON.stringify(model, null, 2)}</pre>;
}

export default Index;
