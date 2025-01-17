import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {TypedUseSelectorHook} from 'react-redux';
import {AppDispatch, RootState} from '../store/slices';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
