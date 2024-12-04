import React, { Component } from "react";

interface Param {
  id: number;
  name: string;
  type: "string";
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Color {
  id: number;
  name: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  currentModel: Model;
}

class ParamEditor extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentModel: props.model,
    };
  }

  getModel = () => {
    return this.state.currentModel;
  };

  handleChange = (id: number, newValue: string) => {
    const updatedParamValues = this.state.currentModel.paramValues.map(
      (paramValue) => {
        if (paramValue.paramId === id) {
          return { ...paramValue, value: newValue };
        }
        return paramValue;
      }
    );
    this.setState({
      currentModel: {
        ...this.state.currentModel,
        paramValues: updatedParamValues,
      },
    });
  };

  renderInput(param: Param, paramValue: string | undefined) {
    switch (param.type) {
      case "string":
        return (
          <input
            type="text"
            value={paramValue || ""}
            onChange={(event) =>
              this.handleChange(param.id, event.target.value)
            }
          />
        );
    }
  }

  render() {
    const { params } = this.props;
    const { currentModel } = this.state;

    return (
      <div>
        <h2>Редактор параметров</h2>
        {params.map((param) => {
          const paramValue = currentModel.paramValues.find(
            (value) => value.paramId === param.id
          )?.value;

          return (
            <div key={param.id} style={{ marginBottom: "10px" }}>
              <label>
                {`${param.name} `}
                {this.renderInput(param, paramValue)}
              </label>
            </div>
          );
        })}
        <div style={{ marginTop: "20px" }}>
          <h3>Текущая структура модели:</h3>
          <pre
            style={{
              background: "#f9f9f9",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            {JSON.stringify(this.getModel(), null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}

const params: Param[] = [
  { id: 1, name: "Назначение", type: "string" },
  { id: 2, name: "Длина", type: "string" },
];

const model: Model = {
  paramValues: [
    { paramId: 1, value: "повседневное" },
    { paramId: 2, value: "макси" },
  ],
  colors: [],
};

const App: React.FC = () => (
  <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
    <ParamEditor params={params} model={model} />
  </div>
);

export default App;
