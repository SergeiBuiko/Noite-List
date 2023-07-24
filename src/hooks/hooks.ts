import { TypedUseSelectorHook, useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { AppDispatch } from '../store';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
