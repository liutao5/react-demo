interface IReqConfig {
    url: string;
}

export default (params: IReqConfig) => fetch('http://localhost:3000', {
  body: JSON.stringify(params),
  method: 'post',
  mode: 'cors',
}).then((res) => res.json()).catch((e) => {
  console.error(e);
  return e.toString();
});
