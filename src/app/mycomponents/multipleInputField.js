import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Select from "react-select";
import { emphasize, makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import PropTypes from "prop-types";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import { Divider, IconButton, InputBase } from "@material-ui/core";
import CustomizedInputBase from "./customSearchComponent";
import IntegrationDownshift from "./customSearchComponent";
import API from "../../apiUrl.json";

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" },
].map((suggestion) => ({
  value: suggestion.label,
  label: suggestion.label,
}));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto",
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: "absolute",
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(2),
  },
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired,
};

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
};

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

const MultipleInputField = ({
  selectedNetwork,
  setSelectedNetworks,
  selectedFilters,
  setSelectedFilters,
  networkWhichSelected,
  setNeworksWhichSelected,
  enrolmentWhichSelected,
  setEnrolmentWhichSelected,
  stateWhichSelected,
  setStateWhichSelected,
  speedWhichSelected,
  setSpeedWhichSelected,
  gameTypeWhichSelected,
  setGameTypeWhichSelected,
  prizePoolWhichSelected,
  setPrizePoolWhichSelected,
  tournamentId,
  setTournamentId,
  handleSingleIdTournamentQuery,
}) => {
  const [networks, setNetwork] = useState([
    { label: "PartyPoker", value: "partypoker", key: "1" },
    { label: "SkyPoker", value: "skypoker", key: "2" },
    { label: "888Poker", value: "888poker", key: "3" },
    { label: "PokerStars", value: "pokerstars", key: "4" },
    { label: "Fullfilt", value: "fullfilt", key: "5" },
  ]);

  useEffect(() => {
    setSelectedNetworks(networkWhichSelected);
    setSelectedFilters([
      ...prizePoolWhichSelected,
      ...gameTypeWhichSelected,
      ...enrolmentWhichSelected,
      ...stateWhichSelected,
      ...speedWhichSelected,
      ...gameTypeWhichSelected,
    ]);
    fetch(API.baseUrl + API.getAllNetworks, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        var arr = [];
        json.tournaments.map((network, index) => {
          arr.push({
            label: network.name,
            value: network.slug,
            key: "" + index,
          });
        });
        //console.log(arr);
        //console.log(organicNetworks);
        setNetwork(arr);
      })
      .catch((err) => console.log(err));
  }, [
    networkWhichSelected,
    prizePoolWhichSelected,
    gameTypeWhichSelected,
    enrolmentWhichSelected,
    stateWhichSelected,
    speedWhichSelected,
    gameTypeWhichSelected,
  ]);
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);
  const [multi, setMulti] = React.useState(null);
  const [prizepool, setPrizePool] = useState([
    {
      value: "500",
      label: "$100 To $500",
      key: "guarantee",
      type: "b",
      operator: "$lt",
    },
    {
      value: "1000",
      label: "$500 To $1000",
      key: "guarantee",
      type: "b",
      operator: "$lt",
    },
    {
      value: "2000",
      label: "$1000 To $2000",
      key: "guarantee",
      operator: "$lt",
      type: "b",
    },
    {
      value: "5000",
      label: "$2000 To $5000",
      key: "guarantee",
      operator: "$lt",
      type: "b",
    },
    {
      value: "10000",
      label: "$5000 To $10000",
      key: "guarantee",
      type: "b",
      operator: "$lt",
    },
  ]);

  const [gameType, setGameType] = useState([
    { value: "H", label: "Hold'em", key: "game", operator: "$eq" },
    { value: "O", label: "Omaha", key: "game", operator: "$eq" },
  ]);

  const [speed, setSpeed] = useState([
    { value: " Turbo", label: "Turbo", key: "speed", operator: "$eq" },
    { value: " Slow", label: "Slow", key: "speed", operator: "$eq" },
  ]);

  const [tournamentsStates, setTournamentStates] = useState([
    {
      value: "Registering",
      label: "Registering",
      key: "state",
      operator: "$eq",
    },
    {
      value: "Late Registering",
      label: "Late Registering",
      key: "state",
      operator: "$eq",
    },
    { value: "Running", label: "Running", key: "state", operator: "$eq" },
    { value: " Completed", label: "Completed", key: "state", operator: "$eq" },
  ]);

  const [enrollment, setEnrollment] = useState([
    {
      label: " 10 To 50",
      value: "50",
      key: "currentEntrants",
      type: "b",
      operator: "$lt",
    },
    {
      label: " 50 To 100",
      value: "100",
      key: "currentEntrants",
      type: "b",
      operator: "$lt",
    },
    {
      label: " 100 To 1000",
      value: "1000",
      key: "currentEntrants",
      type: "b",
      operator: "$lt",
    },
    {
      label: " 1000 To 2000",
      value: "2000",
      key: "currentEntrants",
      type: "b",
      operator: "$lt",
    },
    {
      label: " 2000 To 5000",
      value: "5000",
      key: "currentEntrants",
      type: "b",
      operator: "$lt",
    },
    {
      label: " 5000 To 10000",
      value: "10000",
      key: "currentEntrants",
      type: "b",
      operator: "$lt",
    },
  ]);

  function applyfilters(obj) {
    setSelectedFilters([...selectedFilters, obj]);
  }

  function handleChangeSingle(value) {
    setSingle(value);
  }

  function handleChangeMulti(value) {
    setMulti(value);
  }

  const selectStyles = {
    input: (base) => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit",
      },
    }),
  };

  return (
    <div className={classes.root}>
      <div className={classes.divider} />
      <Row>
        <Col lg={8}>
          <IntegrationDownshift
            networks={networks}
            selectedNetworks={selectedNetwork}
            networkWhichSelected={networkWhichSelected}
            setNeworksWhichSelected={setNeworksWhichSelected}
            setSelectedNetworks={setSelectedNetworks}
          />
        </Col>
        <Col lg={4}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={{ marginBottom: "5px" }}>
              Search By ID
            </Form.Label>

            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                id="outlined-bare"
                className={classes.textField}
                placeholder="eg. 29727927"
                margin="dense"
                variant="outlined"
                inputProps={{ "aria-label": "bare" }}
                value={tournamentId}
                onChange={(e) => setTournamentId(e.target.value)}
              />
              <InputGroup.Append>
                <Button
                  variant="primary"
                  onClick={(e) => handleSingleIdTournamentQuery(e)}
                >
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>

            {/* <TextField
              id="outlined-bare"
              className={classes.textField}
              placeholder="eg. 29727927"
              style={{ width: "100%", height: "42px" }}
              margin="dense"
              variant="outlined"
              inputProps={{ "aria-label": "bare" }}
            /> */}
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ marginTop: "0px" }}>
        <Col lg={2}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.selects}>Game Type</Form.Label>
            <ReactMultiSelectCheckboxes
              options={gameType}
              width="150px"
              onChange={(e) => setGameTypeWhichSelected(e)}
            />
          </Form.Group>
          {/* <Form.Control placeholder="First name" /> */}
        </Col>
        <Col lg={2}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.selects}>Prize Pool</Form.Label>
            <ReactMultiSelectCheckboxes
              options={prizepool}
              width="150px"
              onChange={(e) => setPrizePoolWhichSelected(e)}
            />
          </Form.Group>
          {/* <Form.Control placeholder="First name" /> */}
        </Col>
        <Col lg={2}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.selects}>Speed</Form.Label>
            <ReactMultiSelectCheckboxes
              options={speed}
              width="150px"
              onChange={(e) => setSpeedWhichSelected(e)}
            />
          </Form.Group>
          {/* <Form.Control placeholder="First name" /> */}
        </Col>
        <Col lg={2}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.selects}>State</Form.Label>
            <ReactMultiSelectCheckboxes
              options={tournamentsStates}
              width="150px"
              onChange={(e) => setStateWhichSelected()}
            />
          </Form.Group>
          {/* <Form.Control placeholder="First name" /> */}
        </Col>
        <Col lg={2}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.selects}>Enrolment</Form.Label>
            <ReactMultiSelectCheckboxes
              options={enrollment}
              width="150px"
              onChange={(e) => setEnrolmentWhichSelected(e)}
            />
          </Form.Group>
          {/* <Form.Control placeholder="First name" /> */}
        </Col>
        <Col lg={2}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label style={styles.selects}>Date</Form.Label>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Form.Group>
          {/* <Form.Control placeholder="First name" /> */}
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  selects: { width: "100%", marginBottom: "20px" },
};

export default MultipleInputField;
