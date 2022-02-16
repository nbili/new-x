// react redux connect function

function connect(mapStateToProps) {
  return Component => {
    class ConnectedComponent extends React.Component {
      render() {
        return (
          <Context.Consumer>
            {store => {
              const { dispatch, getState } = store;
              const state = getState();
              const stateNeeded = mapStateToProps(state);
              return <Component {...stateNeeded} dispatch={dispatch} />;
            }}
          </Context.Consumer>
        );
      }
    }
  };
}
