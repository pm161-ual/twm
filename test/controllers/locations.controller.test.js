const {
  homeList,
  locationInfo,
  addReview,
} = require('../../app_server/controllers/locations');

describe('Locations controllers', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {};
    res = {
      render: jest.fn(),
    };
  });

  describe('homeList', () => {
    it('debe renderizar la vista locations-list con los datos esperados', () => {
      homeList(req, res);

      expect(res.render).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledWith('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
          title: 'Loc8r',
          strapline: 'Find places to work with wifi near you!',
        },
        locations: [
          {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
          },
        ],
      });
    });
  });

  describe('locationInfo', () => {
    it('debe renderizar la vista location-info', () => {
      locationInfo(req, res);

      expect(res.render).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledWith('location-info', {
        title: 'Location Info',
      });
    });
  });

  describe('addReview', () => {
    it('debe renderizar la vista location-review-form', () => {
      addReview(req, res);

      expect(res.render).toHaveBeenCalledTimes(1);
      expect(res.render).toHaveBeenCalledWith('location-review-form', {
        title: 'Add Review',
      });
    });
  });
});
