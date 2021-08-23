import { Before, defineParameterType, setDefaultTimeout } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight, engage } from '@serenity-js/core';
import { Actors } from './Actors';

Before(() => engage(new Actors()));

setDefaultTimeout(45000);

