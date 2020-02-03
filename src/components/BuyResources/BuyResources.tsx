import React from "react";
import { TextField, Button } from "@material-ui/core";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { userIdSelector, simRunningSelector, moneySelector } from "../../selectors/eduA";
import { BRWrapper, BRButtonWrapper } from "./BuyResourcesStyles";
import { addNewDelivery } from "../../actions/deliveries";
import { execSimBuy } from "../../actions/eduA";
import { availibleResourcesSelector } from "../../selectors/deliveries";

interface BRStoreProps {
  userId: number;
  simRunning: boolean;
  money: number | string;
  availibleResources: number | string;
}
interface BRDispatchProps {
  addNewDelivery: typeof addNewDelivery;
  execSimBuy: typeof execSimBuy;
}
type BRProps = BRStoreProps & BRDispatchProps;

export const PRICE = 10;
const ORDER_RES = gql`
  mutation OrderResource($userId: Int!, $qty: Int!) {
    orderResource(userId: $userId, qty: $qty) {
      userId
      toSell
      toBuy
      deliveryTime
    }
  }
`;

const BuyResources: React.FC<BRProps> = ({ userId, execSimBuy, money }) => {
  const [resToBuy, setResToBuy] = React.useState(0);

  const [orderResource, { data }] = useMutation(ORDER_RES);
  const handleResourcesChange = (e: any) => {
    e.persist();
    setResToBuy(e.target.value);
  };

  const hasEnoughMoney = money > PRICE * resToBuy;

  const canBuy = hasEnoughMoney && resToBuy > 0;
  const handleBuyButton = () => {
    //@ts-ignore
    orderResource({ variables: { userId: parseInt(userId), qty: parseInt(resToBuy) } });
    execSimBuy(resToBuy);
  };

  const input = (
    <TextField
      id="standard-number"
      label="Resources To Buy"
      type="number"
      placeholder="Resources To Buy"
      variant="outlined"
      error={!canBuy}
      InputLabelProps={{
        shrink: true
      }}
      onChange={handleResourcesChange}
    />
  );

  const buyButton = (
    <BRButtonWrapper>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBuyButton}
        disabled={
          !canBuy
          // !simRunning
        }
      >
        Order
      </Button>
    </BRButtonWrapper>
  );

  return (
    <BRWrapper>
      {input}
      {buyButton}
    </BRWrapper>
  );
};

const mapStateToProps = (state: RootState): BRStoreProps => ({
  userId: userIdSelector(state),
  simRunning: simRunningSelector(state),
  money: moneySelector(state),
  availibleResources: availibleResourcesSelector(state)
});
//@ts-ignore
export default connect(mapStateToProps, { addNewDelivery, execSimBuy })(BuyResources);
