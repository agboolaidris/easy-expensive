import React, { createContext, ReactNode, useContext, useReducer } from 'react';

export enum ModalTypes {
  LOGIN_MODAL = 'LOGIN-MODAL',
}

type AppModal = {
  modal: ModalTypes;
  modalProps?: Record<string, any>;
};

type InitialState = AppModal;

type Props = {
  children: ReactNode;
};

const initialState: InitialState = { modal: '' as ModalTypes, modalProps: {} };

const StateContext = createContext<InitialState>(initialState);
const DispatchContext = createContext<React.Dispatch<AppModal>>(() => null);

export const ModalReducer = (
  state: InitialState,
  appModal: AppModal
): InitialState => {
  return { ...state, ...appModal };
};

const ModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ModalReducer, initialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useActiveModal = () => useContext(StateContext);
export const useOpenModal = () => useContext(DispatchContext);

export default ModalProvider;
